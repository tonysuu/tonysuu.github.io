import java.awt.*;
import java.awt.event.KeyEvent;

public class Block {
	int x = 0;
	int dx = 0;
	int length = 150;
	BouncingBall game;
	
	public Block(BouncingBall game){
		this.game = game;
	}
	
	public void move(){
		if (x+dx > 0 && x+dx < game.getWidth()-length)
		x = x + dx;
	}
	
	public void paint(Graphics2D g){
		g.setColor(Color.red);
		g.fillRect(x,game.getHeight()-60,length,10);
	}
	
	public void keyPressed(KeyEvent e){
		if (e.getKeyCode() == KeyEvent.VK_RIGHT)
			dx = 1;
		if (e.getKeyCode() == KeyEvent.VK_LEFT)
			dx = -1;
	}
	public void keyReleased(KeyEvent e){
		dx = 0;
	}
	
	public Rectangle getRectangle(){
		return new Rectangle(x,game.getHeight()-60,length,10);
	}
}
