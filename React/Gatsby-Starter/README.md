<a href="https://www.crownpeak.com" target="_blank">![Crownpeak Logo](https://github.com/Crownpeak/DXM-SDK-Core/raw/master/images/crownpeak-logo.png?raw=true "Crownpeak Logo")</a>

# Crownpeak Digital Experience Management (DXM) Software Development Kit (SDK) Examples
Crownpeak Digital Experience Management (DXM) Software Development Kits (SDK) have been constructed to assist
the Single Page App developer in developing client-side applications that leverage DXM for content management purposes.

## DXM-React-SDK
<a href="https://github.com/crownpeak/dxm-react-sdk" target="_blank">https://github.com/crownpeak/dxm-react-sdk</a>

## Gatsby Source Plugin for Crownpeak DXM
<a href="https://github.com/Crownpeak/gatsby-source-crownpeak-dxm" target="_blank">https://github.com/Crownpeak/gatsby-source-crownpeak-dxm</a>


## Quick Start
1) Create a new Gatsby project via the <a href="https://www.npmjs.com/package/gatsby-cli" target="_blank">Gatsby CLI</a>
```shell
gatsby new crownpeak-dxm-gatsby-starter https://github.com/crownpeak/dxm-sdk-examples/gatsby-starter
```

2) Populate `.env` with Crownpeak DXM information
> Information relating to CMS Site Root and Project setup can be found in the <a href="https://github.com/Crownpeak/dxm-react-sdk" target="_blank">Crownpeak DXM React SDK</a>.
```dotenv
# Crownpeak DXM Configuration
CMS_INSTANCE={YOUR_CMS_INSTANCE_NAME}
CMS_USERNAME={YOUR_CMS_USERNAME}
CMS_PASSWORD={YOUR_CMS_PASSWORD}
CMS_API_KEY={YOUR_CMS_DEVELOPER_KEY}
CMS_SITE_ROOT={YOUR_CMS_SITE_ROOT_ASSET_ID}
CMS_PROJECT={YOUR_CMS_PROJECT_ASSET_ID}
CMS_WORKFLOW={YOUR_CMS_WORKFLOW_ID}
CMS_DYNAMIC_CONTENT_LOCATION=//searchg2.crownpeak.net/{YOUR_CMS_DYNAMIC_CONTENT_API_NAME}/select/?wt=json
CMS_SCAFFOLD_IGNORE=public,.cache
```

3) Start building!

> Before you can run the Gatsby Develop or Build processes, you will require content to be published into the Crownpeak DXM 
> Dyanamic Content API - therefore, you should follow the instructions within the <a href="https://github.com/Crownpeak/dxm-react-sdk" target="_blank">Crownpeak DXM React SDK</a>
> to ensure that you have content "scaffolded" into the CMS, which also requires publication via Workflow.


## Credit
Thanks to:
* <a href="https://github.com/richard-lund" target="_blank">Richard Lund</a> for the refactoring;
* <a href="https://github.com/ptylr" target="_blank">Paul Taylor</a> for a few edits ;)
 
## License
MIT License

Copyright (c) 2021 Crownpeak Technology, inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
