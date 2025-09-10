{
  pkgs ? import <nixpkgs> { },
}:
pkgs.mkShell {
  packages = with pkgs; [
    hugo
    just
    xh
  ];
  shellHook = ''
  '';
}
