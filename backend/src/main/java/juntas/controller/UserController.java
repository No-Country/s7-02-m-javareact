package juntas.controller;

import juntas.dto.user.LoginRequestDto;
import juntas.dto.user.LoginResponseDto;
import juntas.dto.user.UserRequestDto;
import juntas.dto.user.UserResponseDto;
import juntas.service.IUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public record UserController(IUserService service) {

    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> register(@RequestBody UserRequestDto dto){
        return ResponseEntity.ok(service.register(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto dto){
        return ResponseEntity.ok(service.login(dto));
    }

    @GetMapping("/oauth")
    public ResponseEntity<UserResponseDto> oauthLogin( OAuth2AuthenticationToken authenticate){
        return ResponseEntity.ok(service.oauthLogin(authenticate));
    }
}
