import { NextResponse } from 'next/server';
import axios from 'axios';
import { isValidSuiAddress } from '@mysten/sui.js/utils';

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_KEY = process.env.PINATA_SECRET_KEY;
const PINATA_BASE_URL = 'https://api.pinata.cloud/';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Validate SUI address
        if (!isValidSuiAddress(data.wallet))
        {
            return NextResponse.json({
                success: false,
                error: 'Invalid SUI address'
            }, { status: 400 });
        }

        // Prepare data for IPFS
        const whitelistData = {
            ...data,
            chain: 'sui',
            timestamp: new Date().toISOString()
        };

        // Upload to Pinata
        const response = await axios.post(
            'https://api.pinata.cloud/pinFileToIPFS',
            whitelistData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'pinata_api_key': PINATA_API_KEY,
                    'pinata_secret_api_key': PINATA_SECRET_KEY
                }
            }
        );

        return NextResponse.json({
            success: true,
            hash: response.data.IpfsHash,
            message: 'Successfully added to whitelist'
        });
    } catch (error) {
        console.error('Whitelist submission error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to add to whitelist'
        }, { status: 500 });
    }
}
    