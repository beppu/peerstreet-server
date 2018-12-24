# encoding: utf-8
require File.expand_path("../lib/peerstreet/version", __FILE__)

Gem::Specification.new do |s|
    #Metadata
    s.name = "peerstreet"
    s.version = PeerStreet::VERSION
    s.authors = ["John BEPPU"]
    s.email = ["john.beppu@gmail.com"]
    s.homepage = "https://github.com/beppu/peerstreet-client"
    s.summary = %q{REST client for PeerStreet challenge server}
    s.description = %q{This provides a class for interacting with the REST API I have to build for the test that PeerStreet gave me.}
    s.licenses = ['']
# If you want to show a post-install message, uncomment the following lines
#    s.post_install_message = <<-MSG
#
#MSG

    #Manifest
    s.files = `git ls-files`.split("\n")
    s.test_files = `git ls-files -- {test,spec,features}/*`.split("\n")
    s.executables = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
    s.require_paths = ['lib']

    
    
    s.add_development_dependency 'rspec', '~> 3'
    
end
