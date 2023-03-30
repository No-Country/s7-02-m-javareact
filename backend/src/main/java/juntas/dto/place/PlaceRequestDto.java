package juntas.dto.place;

public record PlaceRequestDto(
        String address,
        String city,
        String province,
        String country
) {

}
