package com.tambola.housie.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    
    @Value("${FRONTEND_URL:http://localhost:3000,http://localhost:5173,http://localhost:8080}")
    private String allowedOrigins;

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // Enable a simple in-memory message broker
        config.enableSimpleBroker("/topic");
        
        // Prefix for messages from client to server
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // Parse allowed origins from environment variable
        String[] origins = allowedOrigins.split(",");
        String[] normalizedOrigins = new String[origins.length];
        for (int i = 0; i < origins.length; i++) {
            normalizedOrigins[i] = origins[i].trim();
        }
        
        // Register the WebSocket endpoint with specific allowed origins
        registry.addEndpoint("/ws")
                .setAllowedOrigins(normalizedOrigins)
                .withSockJS();
    }
}
