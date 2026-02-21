{
  description = "Gruppo Natura Lentiai Frontend workspace";
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_24
        ];

        shellHook = ''
          echo "🌿 Welcome to Gruppo Natura Lentiai Frontend workspace 🌼"
        '';
      };
    };
}
