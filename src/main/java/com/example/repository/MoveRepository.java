package com.example.repository;

import com.example.domain.Game;
import com.example.domain.Move;
import com.example.domain.Player;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by pdybka on 17.06.16.
 */
@Repository
public interface MoveRepository extends CrudRepository<Move, Long> {

    List<Move> findByGame(Game game);
    List<Move> findByGameAndPlayer(Game game, Player player);
    int countByGameAndPlayer(Game game, Player player);
}
