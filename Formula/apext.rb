class Apext < Formula
    desc "A simple CLI tool to manage your Next.js API routes."
    homepage "https://github.com/lifespikes/homebrew-apext"
    url "https://github.com/lifespikes/homebrew-apext/releases/download/v0.2.0/apext-macos-x64.tar.gz"
    sha256 "e9d37a13bc87d41af6ed1cda485ac894aa984e96a33ad27b02f4590e5d48f729"
    version "0.2.0"
    def install
      bin.install "apext"
    end
  end