---
layout: "html_wrapper.njk"
---

<p class="hero-statement">Data Frog is a running lab notebook — data science, ML, and the Python that ties them together, written up as I learn it.</p>

<div class="module-grid">
  <a class="module-card" href="/numpy/">
    <span class="card-meta">01</span>
    <h2>NumPy</h2>
    <p>Python's answer to slow, memory-hungry lists — fixed types, contiguous memory, real speed.</p>
  </a>
  <a class="module-card" href="/stats/">
    <span class="card-meta">02</span>
    <h2>Statistics</h2>
    <p>Distributions, uncertainty, and the summaries that make raw data legible.</p>
  </a>
  <a class="module-card" href="/algos/">
    <span class="card-meta">03</span>
    <h2>Algorithms</h2>
    <p>Python solutions, explicit tradeoffs, and the patterns behind the problems.</p>
  </a>
  <a class="module-card" href="/videos/">
    <span class="card-meta">04</span>
    <h2>Videos</h2>
    <p>Courses worth the time, with the useful parts kept close.</p>
  </a>
</div>

<h2 id="data-sourcing">Data Sourcing</h2>

Start with the data you can legally use: proprietary data your organization controls, public data open to everyone, or data purchased under license.

### Some resources:

<div class="directory-grid">
  <section class="directory-card">
    <h3>U.S. national government</h3>
    <p>Start with federal datasets published for public use.</p>
    <ul>
      <li><a href="https://data.gov/">Data.gov data</a></li>
    </ul>
  </section>
  <section class="directory-card">
    <h3>U.S. state government</h3>
    <p>State portals expose regional records that federal datasets often miss.</p>
    <ul>
      <li><a href="https://opendata.utah.gov/">Utah gov data</a></li>
    </ul>
  </section>
  <section class="directory-card">
    <h3>European</h3>
    <p>Use the European Union portal for datasets published across Europe.</p>
    <ul>
      <li><a href="https://data.europa.eu/en">European data</a></li>
    </ul>
  </section>
  <section class="directory-card">
    <h3>Non-Profit</h3>
    <p>Nonprofits publish focused datasets on health, development, and public welfare.</p>
    <ul>
      <li><a href="https://data.unicef.org/">Unicef data</a></li>
      <li><a href="https://www.who.int/data/">WHO data</a></li>
    </ul>
  </section>
  <section class="directory-card">
    <h3>Private organizations</h3>
    <p>Private organizations release research data and specialized APIs.</p>
    <ul>
      <li><a href="https://www.pewresearch.org/">Pew Research Center</a></li>
      <li><a href="https://developer.nytimes.com/">NY Times</a></li>
    </ul>
  </section>
  <section class="directory-card">
    <h3>Large datasets</h3>
    <p>These catalogs are built for datasets too large or broad for a single portal.</p>
    <ul>
      <li><a href="https://www.google.com/publicdata/directory#!">Google data</a></li>
      <li><a href="https://aws.amazon.com/marketplace/search/results?trk=868d8747-614e-4d4d-9fb6-fd5ac02947a8&amp;sc_channel=el&amp;FULFILLMENT_OPTION_TYPE=DATA_EXCHANGE&amp;CONTRACT_TYPE=OPEN_DATA_LICENSES&amp;filters=FULFILLMENT_OPTION_TYPE%2CCONTRACT_TYPE">AWS marketplace</a></li>
      <li><a href="https://registry.opendata.aws/">AWS opendata</a></li>
    </ul>
  </section>
  <section class="directory-card">
    <h3>Web Scraping and APIs</h3>
    <p>When no dataset exists, collect structured data through an API or scrape it from the web with the right tool:</p>
    <ul>
      <li>import.io</li>
      <li>ScraperWiki</li>
      <li>Tabular</li>
      <li>Google Sheets</li>
      <li>Excel</li>
    </ul>
    <p>Google Sheets can import an HTML table directly. Put this formula in cell A1:</p>
    <p><code>=IMPORTHTML('https://en.wikipedia.org/wiki/Iron_Chef_America', 'table', 2)</code></p>
  </section>
</div>
