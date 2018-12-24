require 'uri'
require 'json'
require 'httparty'

class PeerStreet::Client
  include HTTParty
  base_uri 'https://peerstreet.bavl.org/'

  def initialize(options)
    if options[:base_uri]
      self.class.base_uri options[:base_uri]
    end
  end

  def msa zip
    self.class.get('/', { query: { zip: zip } })
  end
end
