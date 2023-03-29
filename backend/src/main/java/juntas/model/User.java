package juntas.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private Integer dni;

    private String name;

    private String lastname;

    @Column(name = "profile_image")

    private String profileImage;

    private String password;

    @Column(name = "birthday_date")
    private LocalDate birthdayDate;

    @Column(name = "register_date")
    private LocalDate registerDate;

    @Column(name = "email_confirmed")
    private Boolean isConfirmedEmail;

    @Column(name = "dni_confirmed")
    private Boolean hasConfirmedDni;

    @OneToMany
    private List<Qualification> qualifications;
    @OneToOne
    private Role role;

    @PrePersist
    public void prePersist(){
        this.registerDate = LocalDate.now();
        this.hasConfirmedDni = true;
        this.isConfirmedEmail = false;
        this.qualifications = new ArrayList<>();
    }
}
