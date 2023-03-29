package juntas.dto.user;

import java.time.LocalDate;

public record UserRequestDto(

        String name,
        String lastName,
        String email,
        Integer dni,
        String password,
        LocalDate birthdayDate,
        String profileImage
) {
}
