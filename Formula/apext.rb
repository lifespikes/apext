class Apext < Formula
    desc "A simple CLI tool to output all your Next.js API routes in your console."
    homepage "https://github.com/lifespikes/homebrew-apext"
    url "https://github.com/lifespikes/homebrew-apext/releases/download/0.0.1/apext-macos-x64.tar.gz"
    sha256 "0b4f6c87c7105e807839593bf885fb44793ca0800330bec69b5f8eb9c98d9c72"
    version "0.0.1"
    def install
      bin.install "apext"
    end
  end