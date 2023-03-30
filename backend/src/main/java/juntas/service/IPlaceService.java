package juntas.service;

import juntas.dto.place.PlaceRequestDto;
import juntas.dto.place.PlaceResponseDto;

public interface IPlaceService {

    PlaceResponseDto createPlace(PlaceRequestDto toCreate);

    PlaceResponseDto updatePlace(Long id, PlaceRequestDto toUpdate);

    PlaceResponseDto findById(Long id);

    PlaceResponseDto findByCity(String city) throws Exception;

    PlaceResponseDto findByProvince(String province);

    void deletePlace(Long id);
}
