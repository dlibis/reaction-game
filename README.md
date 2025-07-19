# Reaction Game

## Overview

This is a proof-of-concept (POC) web application that tests and provides feedback on user reaction time and quick decision making. The project is built using React +Next.js + TypeScript with a focus on MVP approach and rapid development.

## Goal

Implement a functioning minimal reaction game where users must quickly identify and respond to visual indicators appearing on screen within a 1-second timeframe.

## Game Mechanics

### Game Flow

1. **Start Screen**: User enters their name and clicks 'START'
2. **Waiting State**: Random delay of 2-5 seconds (user should not interact)
3. **Indicator Display**: Shape appears on left or right side for exactly 1 second
4. **User Response**: Player presses 'a' (left) or 'l' (right) key
5. **Feedback**: Success/error message displayed, then cycle repeats

### Controls

- **'a' key**: Respond to left-side indicators
- **'l' key**: Respond to right-side indicators

### Game States & Feedback

| User Action                             | State Type | Message         | Color |
| --------------------------------------- | ---------- | --------------- | ----- |
| Key press during waiting state          | Mistake    | 'Too Soon'      | Red   |
| Wrong key during indicator              | Mistake    | 'Wrong Key'     | Red   |
| No response before indicator disappears | Mistake    | 'Too Late'      | Red   |
| Correct key while indicator is visible  | Success    | Success message | Green |

## Technical Specifications

### Frontend Requirements

- **Framework**: React + Next.js + TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **Game Logic**: Accurate timing and state management
- **Responsive Design**: Indicators clearly visible on both sides

### Backend Requirements

#### Database Storage

- User name
- Number of successful steps completed
- Enriched user data from external APIs

#### API Integrations

1. **Gender Detection**: [Genderize.io](https://genderize.io)

   - Determine gender from username
   - Only accept probability > 0.95
   - Otherwise mark as "undetermined"

2. **User Profile Enrichment**: [Random User Generator API](https://randomuser.me/)
   - Fetch mock data based on detected gender
   - Enrich user profiles with additional information

#### Endpoints

- **GET /api/users**: Return leaderboard sorted by successful steps (no UI required)
- **POST /api/users**: Store/update user game data
- \*\*PUT /api/users/[id]: update user data - used to update the score

## Getting Started

### Prerequisites

- Node.js
- pnpm package manager

### Installation & Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Set up database (if using Prisma)
pnpm prisma generate
pnpm prisma db push
```

Open [http://localhost:3000](http://localhost:3000) to play the game.

## Assumptions

- the responses from api routes always succeeds
- we are dealing with small amount of users
- the db can have multiple users with the same name
- we cant go back to the user we played with
