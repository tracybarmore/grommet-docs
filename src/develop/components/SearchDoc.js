// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var stringify = require("json-stringify-pretty-compact");
var DocsArticle = require('../../DocsArticle');
var Search = require('grommet/components/Search');

var SIMPLE_SUGGESTIONS = ['item 1', 'item 2', 'item 3'];
var RICH_SUGGESTIONS = [
  {label: 'item 1', data: '/item-1'},
  {label: 'item 2', data: '/item-2'},
  {label: 'item 3', data: '/item-3'}
];

var SearchDoc = React.createClass({

  getInitialState: function () {
    return {
      value: "",
      simpleSuggestions: [],
      richSuggestions: []
    };
  },

  _onChange: function (value) {
    var text;
    if (value.hasOwnProperty('label')) {
      text = value.label;
    } else {
      text = value;
    }
    var simpleSuggestions;
    var richSuggestions;
    if (text) {
      var regexp = new RegExp(text, 'i');
      var simpleSuggestions = SIMPLE_SUGGESTIONS.filter(function (suggestion) {
        return regexp.test(suggestion);
      });
      var richSuggestions = RICH_SUGGESTIONS.filter(function (suggestion) {
        return regexp.test(suggestion.label);
      });
    } else {
      simpleSuggestions = [];
      richSuggestions = [];
    }
    this.setState({
      value: text,
      simpleSuggestions: simpleSuggestions,
      richSuggestions: richSuggestions
    });
  },

  render: function() {
    var inline =
    "<Search onChange={...} />";
    return (
      <DocsArticle title="Search" colorIndex="neutral-3">

        <p>A responsive search control.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>defaultValue  {"{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>dropAlign     {"{left: left|right, right: left|right, top: top|bottom, bottom: top|bottom}"}</code></dt>
            <dd>Where to place the drop down.
              At most one of left or right and one of top or bottom should be specified.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates that the search input should always
              be visible.</dd>
            <dt><code>onChange      {"function ({text}) {...}"}</code></dt>
            <dd>Function that will be called when the user types some text.</dd>
            <dt><code>placeHolder   {"{string}"}</code></dt>
            <dd>Placeholder text to use when the input is empty.</dd>
            <dt><code>size          medium|large</code></dt>
            <dd>The size of the Header. Defaults to <code>medium</code>.</dd>
            <dt><code>suggestions   [{"{string}|{label: {string}, ...}"}, ...]</code></dt>
            <dd>Suggestions to show, typically based on what the user has typed so far.
              You can pass an array of strings or objects. Objects must have a
              label: property but can have any other properties you like. This object will
              be given to the onChange() handler if the suggestion is selected.</dd>
            <dt><code>value         {"{string}"}</code></dt>
            <dd>What text to show in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Default</h3>
          <div className="example">
            <Search />
          </div>
          <pre><code className="html hljs xml">{"<Search />"}</code></pre>

          <h3>Left</h3>
          <div className="example">
            <Search dropAlign={{right: 'right'}} />
          </div>
          <pre><code className="html hljs xml">{"<Search dropAlign={{right: \"right\"}} />"}</code></pre>

          <h3>Suggestions and Value</h3>
          <div className="example">
            <Search value={this.state.value}
              suggestions={this.state.simpleSuggestions}
              onChange={this._onChange} />
          </div>
          <pre><code className="html hljs xml">{"<Search defaultValue=\"" +
            this.state.value + "\" suggestions={" +
            stringify(this.state.simpleSuggestions) + "} />"}</code></pre>

          <h3>Inline</h3>
          <div className="example">
            <Search inline={true}/>
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true}/>"}</code></pre>

          <h3>Inline, Placeholder</h3>
          <div className="example">
            <Search inline={true} placeHolder="Search" />
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true} placeHolder=\"Search\" />"}</code></pre>

          <h3>Inline, Value, and Suggestions</h3>
          <div className="example">
            <Search inline={true} value={this.state.value}
              suggestions={this.state.simpleSuggestions}
              onChange={this._onChange} />
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true} value=\"" +
            this.state.value + "\" suggestions={" +
            stringify(this.state.simpleSuggestions) + "}/>"}</code></pre>

          <h3>Inline, Value, Rich Suggestions</h3>
          <div className="example">
            <Search inline={true} value={this.state.value}
              suggestions={this.state.richSuggestions}
              onChange={this._onChange} />
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true} value=\"" +
            this.state.value + "\" suggestions={" +
            stringify(this.state.simpleSuggestions) + "}/>"}</code></pre>

          <h3>Large</h3>
          <div className="example">
            <Search inline={true} value={this.state.value} size="large"
              suggestions={this.state.simpleSuggestions}
              onChange={this._onChange} />
          </div>
          <pre><code className="html hljs xml">{"<Search size=\"large\"> ..."}</code></pre>

          {/*}
          <h3>Small</h3>
          <p>Avoid using this size as it is too small for touch devices.</p>
          <div className="example">
            <Search inline={true} value={this.state.value} size="small"
              suggestions={this.state.simpleSuggestions}
              onChange={this._onChange} />
          </div>
          <pre><code className="html hljs xml">{"<Search size=\"small\"> ..."}</code></pre>
          {*/}

        </section>

      </DocsArticle>
    );
  }
});

module.exports = SearchDoc;
