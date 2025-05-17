package com.example.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.auth.model.Usuario;
import com.example.auth.repository.UsuarioRepository;
import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario salvarUsuario(Usuario usuario) {
        // Verifica se já existe um usuário com este email
        if (usuarioRepository.findByEmail(usuario.getEmail()).isPresent()) {
            throw new RuntimeException("Email já cadastrado");
        }
        
        // Criptografa a senha antes de salvar
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
        return usuarioRepository.save(usuario);
    }    public Usuario autenticarUsuario(Usuario usuario) {
        Usuario usuarioExistente = usuarioRepository.findByEmail(usuario.getEmail())
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (!passwordEncoder.matches(usuario.getSenha(), usuarioExistente.getSenha())) {
            throw new RuntimeException("Senha inválida");
        }

        return usuarioExistente;
    }

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }
}
