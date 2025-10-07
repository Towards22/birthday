import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BirthdayWish from '@/lib/models/BirthdayWish';

export async function GET() {
  try {
    await connectDB();

    const wishes = await BirthdayWish.find({ isApproved: true })
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    return NextResponse.json({ wishes }, { status: 200 });
  } catch (error) {
    console.error('Error fetching wishes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch wishes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const newWish = await BirthdayWish.create({
      name: name.trim(),
      email: email?.trim() || undefined,
      message: message.trim(),
      isApproved: true,
    });

    return NextResponse.json(
      { wish: newWish, message: 'Wish submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating wish:', error);
    return NextResponse.json(
      { error: 'Failed to submit wish' },
      { status: 500 }
    );
  }
}
