class Apext < Formula
    desc "A simple CLI tool to manage and organize your Next.js API routes."
    homepage "https://github.com/lifespikes/apext"
    url "https://github.com/lifespikes/apext/releases/download/v0.3/apext-macos-x64.tar.gz"
    sha256 "fc647d2c2c9f7f0dff3126ec3bc479e19f2b209e409598bf9b2c9eb846831db9"
    version "0.3"
    def install
      bin.install "apext"
    end
  end