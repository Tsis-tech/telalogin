package com.example.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.auth.model.Usuario;
import com.example.auth.service.UsuarioService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registro")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.salvarUsuario(usuario));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.autenticarUsuario(usuario));
    }

    @GetMapping("/usuarios")
    public ResponseEntity<?> listarUsuarios() {
        return ResponseEntity.ok(usuarioService.listarTodos());
    }
}