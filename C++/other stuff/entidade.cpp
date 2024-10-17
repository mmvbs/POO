//provavelmente preciso intaçar SDL

class Entidade{
    public:
        int x, y;
        int largura, altura;
        int velocidade;
        int escala;
        int step_index;
        

        //construtor
        Entidade(int x, int y, int largura, int altura, int velocidade, int escala){
            this->x = x;
            this->y = y;
            this->largura = largura;
            this->altura = altura;
            this->velocidade = velocidade;
            this->escala = escala;
            this->step_index = 0;
        }

        void carregar_imangens(){
            //carregar imagens
        }

        void atualizar_posicao(int dx, int dy){
            x = dx * velocidade;
            y = dy * velocidade;
        }

        void desenha(){
            // algo como o tela blit
        }

        void atualizar_animacao(){
            //atualizar animação
        }
        void checar_colisao(){
            //checar colisão
        }
};