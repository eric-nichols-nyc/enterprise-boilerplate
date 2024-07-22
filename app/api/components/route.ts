// create a get request route that fetch some items from a ts file in Next Js
import { NextResponse } from 'next/server';
import components from "./components.json"
export async function GET(req: Request) {
    return NextResponse.json(components);
}
