{ pkgs, ... }:
{
  home = {
    username = "node";
    homeDirectory = "/home/node";
    stateVersion = "26.05";
    sessionVariables = {
      EDITOR = "nvim";
      VISUAL = "nvim";
      GIT_EDITOR = "nvim";
      TERM = "xterm-kitty";
    };
    shell.enableFishIntegration = true;
    packages = with pkgs; [
      just
      tree
      dust
    ];
  };

  programs = {
    home-manager.enable = true;
    bat.enable = true;
    fd.enable = true;
    ripgrep.enable = true;
    git.enable = true;
    fastfetch.enable = true;
    jq.enable = true;
    bash = {
      enable = true;
      bashrcExtra = builtins.readFile ./bashrcExtra.sh;
      initExtra = builtins.readFile ./initExtra.sh;
    };
    neovim = {
      enable = true;
      defaultEditor = true;
    };
    eza = {
      enable = true;
      icons = "auto";
    };
    fish = {
      enable = true;
      shellInit = builtins.readFile ./shellInit.fish;
    };
    yazi = {
      enable = true;
      enableFishIntegration = true;
    };
    fzf = {
      enable = true;
      enableFishIntegration = true;
    };
    starship = {
      enable = true;
      enableFishIntegration = true;
    };
    zoxide = {
      enable = true;
      enableFishIntegration = true;
    };
  };
}
