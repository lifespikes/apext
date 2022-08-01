class Apext < Formula
    desc "A simple CLI tool to manage your Next.js API routes."
    homepage "https://github.com/lifespikes/homebrew-apext"
    url "https://github.com/lifespikes/homebrew-apext/releases/download/0.1.0/apext-macos-x64.tar.gz"
    sha256 "00a5d1aed6c662b8342dc90e91721c07fc7639d6ff6c6a0f7cd60cff630f593f"
    version "0.1.0"
    def install
      bin.install "apext"
    end
  end