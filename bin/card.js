#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  boxTop: chalk.magenta('◤★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★◥'),
  boxSide: chalk.magenta('★'),
  name: chalk.cyan.bold('  Alejandra Giraldo /'),
  bio: chalk.white.bold('       ❣ In love with Coding ❣       '),
  handle: chalk.cyan('maleja on npm  '),
  boxBottom: chalk.magenta('◣★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★◢'),
  workFront: chalk.white('Frontend With Angular'),
  workBack: chalk.white('Backend With Node.js'),
  logoNode: chalk.green('⬢'),
  logoAngular: chalk.bgRed('A'),
  twitter: chalk.cyan('https://twitter.com/maleja111'),
  github: chalk.cyan('https://github.com/maleja111'),
  linkedin: chalk.cyan('https://linkedin.com/in/maleja1111'),
  npx: chalk.white('npx maleja'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const space = '              '
const boxTop = `${data.boxTop}`
const heading = `${data.name} ${data.handle}`
const bio = `${data.bio}`
const boxSide = `${data.boxSide}`
const boxBottom = `${data.boxBottom}`
const working = `${data.labelWork}  ${data.workFront} ${data.logoAngular} ${data.workBack} ${data.logoNode}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = space + boxTop + newline + space + boxSide + heading + boxSide
  + newline + space + boxSide + bio + boxSide + newline + space + boxBottom
  + newline.repeat(2) + newline + working + space + newline + twittering + newline + githubing
  + newline + linkedining + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
