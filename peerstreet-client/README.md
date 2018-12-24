peerstreet-client
=======================

This provides a class for interacting with the REST API I have to build for the test that PeerStreet gave me.

## Setup

1. Install

```sh
gem build peerstreet-client.gemspec
gem install peerstreet-client-0.1.0.gem
```

## Usage

### Example

```ruby
require 'peerstreet/client'
  ps  = PeerStreet::Client.new
# ps  = PeerStreet::Client.new :base_uri => 'http://localhost:4200'
res = ps.msa '90266'
```

### PeerStreet::Client

#### new(options)

Construct and initialize the client.  The `options` parameter is optional, but if it's provided,
it should have a `:base_uri` key which specifies a URL (without a trailing slash) for the REST
endpoint to use.

#### base_uri

Get the `@base_uri` of the client.

#### base_uri=

Set the `@base_uri` of the client.

#### msa(zip)

Given a ZIP code as a string, return the MSA data found for it.

## Development

When hacking on this gem, the REPL `pry` comes in handy. You can load the
contents of the gem with `pry --gem`.
