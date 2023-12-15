package org.employee.repository;

import java.util.Optional;

import org.employee.model.WebUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WebUserRepository extends JpaRepository<WebUser, Long>{
	Optional<WebUser> findByEmailOrUsername(String email,String username);
	Optional<WebUser> findByEmail(String email);
	
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
}
