class Apext < Formula
    desc "A simple CLI tool to manage and organize your Next.js API routes."
    homepage "https://github.com/lifespikes/apext"
    url "https://github.com/lifespikes/apext/releases/download/v0.3.6/apext-macos-x64.tar.gz"
    sha256 "7123bc4f4226e222a59ab557a9c68f971ee58fa9595dd920991c999d73a407e2"
    version "0.3.6"
    def install
      bin.install "apext"
    end
  end