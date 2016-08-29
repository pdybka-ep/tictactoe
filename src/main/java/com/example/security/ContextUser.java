package com.example.security;

import com.example.domain.Player;
import com.google.common.collect.ImmutableSet;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

/**
 * Created by pdybka on 03.06.16.
 *
 *
 */
public class ContextUser extends org.springframework.security.core.userdetails.User {

    private final Player player;

    public ContextUser(Player player) {
        super(player.getUserName(),
                player.getPassword(),
                true,
                true,
                true,
                true,
                ImmutableSet.of(new SimpleGrantedAuthority("create")));

        this.player = player;
    }

    public Player getPlayer() {
        return  player;
    }
}
