package com.example.DTO;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;

import javax.validation.constraints.NotNull;


/**
 * Created by pdybka on 27.05.16.
 */

@Getter
@Setter
public class PlayerDTO {

    @NotNull
    private String userName;
    @NotNull
    private String password;
    @NotNull
    private String email;
}
