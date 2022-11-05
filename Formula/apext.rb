class Apext < Formula
    desc "A simple CLI tool to manage and organize your Next.js API routes."
    homepage "https://github.com/lifespikes/apext"
    url "https://github.com/lifespikes/apext/releases/download/v0.3.4/apext-macos-x64.tar.gz"
    sha256 "bc78cf741419852b03ca9d9ce6f7e6d627494e69b86ba92e7cf261650a81511e"
    version "0.3.4"
    def install
      bin.install "apext"
    end
  end