package com.example.repository;

import com.example.domain.Game;
import com.example.domain.Player;
import com.example.enums.GameStatus;
import com.example.enums.GameType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by pdybka on 30.05.16.
 */
@Repository
public interface GameRepository extends CrudRepository<Game, Long>{
    List<Game> findByGameTypeAndGameStatus(GameType GameType, GameStatus GameStatus);
    List<Game> findByGameStatus(GameStatus gameStatus);
}
