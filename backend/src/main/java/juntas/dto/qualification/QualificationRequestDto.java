package juntas.dto.qualification;

public record QualificationRequestDto(
    Long fromUser,
    Long toUser,
    String comment,
    Integer qualificationQuantity

) {

}