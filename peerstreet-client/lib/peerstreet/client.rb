require 'uri'
require 'json'
require 'httparty'
require_relative 'version'

DEFAULT_BASE_URI = 'https://peerstreet.bavl.org/'

class PeerStreet::Client
  include HTTParty
  #base_uri 'https://peerstreet.bavl.org/'

  attr_accessor :base_uri

  def initialize(options={ :base_uri => DEFAULT_BASE_URI })
    if options[:base_uri]
      self.base_uri = options[:base_uri]
    end
  end

  def url_for(route)
    @base_uri + route
  end

  def msa zip
    self.class.get(url_for('/'), { query: { zip: zip } })
  end
end
