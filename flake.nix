{
  description = "Gruppo Natura Lentiai Frontend workspace";

  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_22
          python3
          gcc
          gnumake
          pkg-config
          # Librerie per i moduli nativi (Gatsby/Sanity)
          vips
        ];

        shellHook = ''
          # Invece di LD_LIBRARY_PATH, diciamo ai compilatori dove trovare le cose
          export PKG_CONFIG_PATH="${pkgs.vips.dev}/lib/pkgconfig"
          
          # Indichiamo a Sharp (usato da Gatsby) di usare la libvips di sistema di Nix
          export SHARP_IGNORE_GLOBAL_LIBVIPS=1
          
          echo "🌿 Welcome to Gruppo Natura Lentiai Frontend workspace 🌼"
          echo "✅ Clean environment: System tools won't crash."
        '';
      };
    };
}