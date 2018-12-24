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

```ruby
require 'peerstreet/client'
ps  = PeerStreet::Client.new :base_uri => 'http://peerstreet.bavl.org'
res = ps.msa '90266'
```

## Development

When hacking on this gem, the REPL `pry` comes in handy. You can load the
contents of the gem with `pry --gem`.
