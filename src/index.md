---
layout: "html_wrapper.njk"
---

Welcome to Data Frog. My personal notes and learning journey for data science, machine learning, and computer programming.

## Data Sourcing

When looking for data to start experimenting with, you can think of it in three categories: proprietary, public, and purchased.

Proprietary can be thought of as 'in house' data. Or data from an organization you are already a part of.

Public is a category of data that is available to anyone. 

### Some resources:

Data at **U.S. national government** level:

- [Data.gov data](https://data.gov/)

***

Data at **U.S. state government** level:

- [Utah gov data](https://opendata.utah.gov/)

***

**European** data:

- [European data](https://data.europa.eu/en)

***

**Non-Profit** data:

- [Unicef data](https://data.unicef.org/)

- [WHO data](https://www.who.int/data/)

***

**Private organizations'** data:

- [Pew Research Center](https://www.pewresearch.org/)

- [NY Times](https://developer.nytimes.com/)

***

**Large** data:

- [Google data](https://www.google.com/publicdata/directory#!)

- [AWS marketplace](https://aws.amazon.com/marketplace/search/results?trk=868d8747-614e-4d4d-9fb6-fd5ac02947a8&sc_channel=el&FULFILLMENT_OPTION_TYPE=DATA_EXCHANGE&CONTRACT_TYPE=OPEN_DATA_LICENSES&filters=FULFILLMENT_OPTION_TYPE%2CCONTRACT_TYPE)

- [AWS opendata](https://registry.opendata.aws/)

### Web Scraping and APIs

Web API's and web scraping are great for getting data as well. For scraping data the following tools are great:

- import.io
- ScraperWiki
- Tabular
- Google Sheets
- Excel

When using Google sheets, you can pull in tables very easily from around the web. Open up Google sheets, in the A1 cell, paste this type of formula (an example):

`=IMPORTHTML('https://en.wikipedia.org/wiki/Iron_Chef_America', 'table', 2)`
