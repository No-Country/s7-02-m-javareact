package juntas.dto.qualification;

public record QualificationResponseDto(
        Long qualificationId,
        Long fromUser,
        Long toUser,
        String comment,
        Integer qualificationQuantity

) {

}
