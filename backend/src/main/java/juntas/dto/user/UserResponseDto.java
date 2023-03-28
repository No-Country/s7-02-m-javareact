package juntas.dto.user;

import lombok.Builder;

import java.time.LocalDate;

@Builder
public record UserResponseDto(

        String name,
        String lastName,
        String email,
        Integer dni,
        LocalDate birthdayDate,
        LocalDate registerDate,
        Boolean isConfirmedEmail,
        Boolean hasConfirmedDni,
        String token
) {
}
