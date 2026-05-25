import { NextResponse } from 'next/server';
import { getGithubData } from '@/lib/github';

export async function GET() {
  try {
    const data = await getGithubData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ repos: [], summary: { totalRepos: 0, topLanguage: 'JavaScript', stars: 0, lastUpdated: '' } }, { status: 500 });
  }
}
