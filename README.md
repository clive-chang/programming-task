# Overview

The task is to parse a log file containing HTTP requests and to report on its contents.
For a given log file we want to know,
* The number of unique IP addresses
* The top 3 most visited URLs
* The top 3 most active IP addresse

## Description

The goal here is to parse the log file and extract out the IP addresses as well as the visited URL for each entry, it will be broken down into steps below:

- Create a HTML markup with file input control in order to read the file
- Add an event listener to the file control through JS so we can read and manipulate the data
- Parse the log file and split each entry by new line and then extract the IP addresses and URLs out using Regex into arrays
- With the arrays of the IP addresses and URLs available, then we can tackle the 3 tasks given
    - The number of unique IP addresses
    - The top 3 most visited URLs
    - The top 3 most active IP addresse

## Getting Started

### Dependencies

* The task is written in plain Javascript with HTML for the basic markup in order to read the log file
* Jest is used to test the logical functions

### Installing

* run npm install after downloading the repository

### Instruction
* Open up index.html in browser
* Open up the browser dev tool and then upload the log file using the file input
* Result should be printed out in the console