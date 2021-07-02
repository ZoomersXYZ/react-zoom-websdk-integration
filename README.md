### Installation Steps
_This is coded in Javascript (NodeJS specifically). Yarn as the package manager. Node is likely already installed for you. If not, look up installing node [and npm]_

- If you want to use npm and not yarn, you're free to do so. The only difference is no npm lock file committed.
- To continue with yarn, install it with `npm install -g yarn`.
- Install necessary packages with `yarn install`.

## Project specific steps
1. Add in your API_KEY and API_SECRET in /src/Zoom.js. These values come from creating a Zoom developer app.

2. src/index.js has two parameters:
- meetingNumber: The Zoom meeting ID
- userName: The handle/username assigned when the web SDK loads and you log into the meeting

3. Run `sudo yarn start` or npm if using that.

_Port 80 needs to be used. Normally this requires sudo. Port 80 is a Zoom requirement. I'll link to a reference where they bring this up soon._