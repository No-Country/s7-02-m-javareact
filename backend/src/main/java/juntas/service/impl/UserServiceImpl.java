package juntas.service.impl;

import juntas.dto.user.UserRequestDto;
import juntas.dto.user.UserResponseDto;
import juntas.model.User;
import juntas.repository.UserRepository;
import juntas.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final UserRepository repository;

    @Override
    public UserResponseDto register(UserRequestDto dto) {

        if(!existsByEmail(dto.email())){



        } else {
            throw new RuntimeException("TO DO");
        }

        return null;
    }

    @Override
    public User findByEmail(String email) {
        return repository.findByEmail(email).orElseThrow();
    }

    @Override
    public boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }
}
