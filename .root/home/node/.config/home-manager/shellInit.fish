fish_vi_key_bindings
set -g fish_greeting

# eza
alias list="command ls"
alias ls="eza --long --icons --git --all --header --binary --no-permissions \
          --no-user --mounts --grid --group-directories-first"
alias lsl="eza --long --icons --header --all --binary --mounts \
          --group-directories-first --group"
alias lt="eza --tree --icons --all --group-directories-first"
alias lt1="eza --tree --level=2 --icons --all --group-directories-first"
alias lt2="eza --tree --level=2 --icons --all --group-directories-first"
alias lt3="eza --tree --level=3 --icons --all --group-directories-first"
alias lt4="eza --tree --level=4 --icons --all --group-directories-first"
alias lt5="eza --tree --level=5 --icons --all --group-directories-first"

alias n="nvim"
alias p="pnpm"
alias j="just"

# yazi
function y
    set tmp (mktemp -t "yazi-cwd.XXXXXX")
    yazi $argv --cwd-file="$tmp"
    if set cwd (command cat -- "$tmp"); and [ -n "$cwd" ]; and [ "$cwd" != "$PWD" ]
        builtin cd -- "$cwd"
    end
    rm -f -- "$tmp"
end
