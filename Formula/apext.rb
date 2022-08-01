class Apext < Formula
    desc "A simple CLI tool to output all your Next.js API routes in your console."
    homepage "https://github.com/lifespikes/homebrew-apext"
    url "https://github.com/lifespikes/homebrew-apext/releases/download/0.0.2/apext-macos-x64.tar.gz"
    sha256 "cd14ac32e3e6b0510483fbf2cab335aff688e3dc2c3e389c0b3876bac4d32f82"
    version "0.0.2"
    def install
      bin.install "apext"
    end
  end