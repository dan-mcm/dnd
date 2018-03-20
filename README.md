# DM Toolkit

A React application designed to aid Dungeon Masters running D&D campaigns.
Spells JSON modified from:
https://github.com/tadzik/5e-spells/blob/master/spells.json

![Website-1](/screenshots/website-1.png)
![Website-2](/screenshots/website-2.png)

## Running locally

Clone the repo and from inside of it run the below commands. You will need to have [node](https://nodejs.org/en/) installed

```
npm install
npm start
```

## Testing

Basic [Jest](https://facebook.github.io/jest/) snapshots and component rendering tests are currently setup and integrated via [CircleCI](https://circleci.com/).
This repo has been setup as protected requiring passing test before branch merges can be made to master.

Evidence of testing can be seen below:

![CircleCI-Branch-Test](/screenshots/circleci-evidence1.png)

![CircleCI-Dashboard](/screenshots/circleci-evidence2.png)

## Current WIP Component Focus:

### Spell Search Component

- Additional filters could be implemented - user input search

### Dice Component

- Add user customizable D field amount e.g. D24.
- Track history of previously rolled dice.
- 'Roll All' option to roll multiple dice at the same time.
- On mobile devices images are slightly off - could be optimized for mobile responsiveness.

### Potential Future Additions

- Skill Search Component -> similar in functionality to the Spell Search.
- DM Screen Component -> useful basic information reference for D&D campaigns.
- Character Sheet Component -> Online form completion & download.
- Music Component -> Open sourced music tracks for campaigns - potentially use spotify plugin with playlist.
