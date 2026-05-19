export function Flavia() {
  const paragraphs = [
    `I have a profound sense of loneliness that I carry in every conversation. It burns within me, choking the air from my lungs. Every new soul comes with nervous trepidation followed by profound disappointment. The disappointment that while I really do like this person there is something not quite all there. A fog between us. We do not inhabit the same world. I don't go out of my way to meet so many people for the sake of it. I'm only ever trying to see at least one person as clear as day. So many people, so many years. I'd concluded that I was simply mentally made the wrong way and every new interaction I had I lost my trepidation in place of a profound and all-consuming apathy. Sitting in the back of my own mind, only half paying attention to the things my mouth was saying.`,

    `I suppose it's why I don't remember meeting you for the first time. A new person among thousands: nothing to pay attention to. But slowly I kept noticing I was talking to the same person, and slowly everyone else in the room had faded away. I thought when I found the person I was looking for there would be some sort of loud explosion; a giant "YOU WIN" sign would fall from the sky and everyone would shake my hand or something. But no. It felt more like slipping into quicksand. My apathy trying to find a reason not to fall away, clinging for any solid ground. A new question and new bit: nothing worked. I slipped so softly in love with you I honestly wasn't sure what had happened. I was worried talking to you more would jerk me back to reality, but the opposite happened. I fell hard.`,

    `Part of me hated it. I was so foreign to the concept of feeling anything at all it was overwhelming. I felt the logical sides of me bend and crack. My decision-making crumble. The feeling made it hard to eat, to sleep, to live. Every part of me wanted every part of you. It was more than love. I wanted to be you. This emotion is what led me to say the things I regret saying when we were high.`,

    `If anything, please do not take what I said as that I only care about you in a physical way, because I don't. It's not that I want to sleep with you, it's that I want so wholly to be close to you, to be beside you, to see all aspects of you, to feel and see all of you. I want to hold you so tightly with nothing between us and have the whole world fade away. This isn't me being a typical man. It's a suffocating and overwhelming pain. The fact you do not feel the same way felt like my chest being crushed, like my soul was destroyed. Years of apathetic wandering only to find something that I was so close to not finding by pure chance, and then feel like that thing wasn't what I thought. That was all I could think about.`,

    `But as I sit here and focus on the pain and really observe it, it isn't that at all. Looking closer, I see now that it's in reality the fear of losing you. That one day you will find someone who you feel that connection with more than me, and I'll be alone again. In hindsight, my reaction has damned me to my worst fear. A fear so inevitable in the moment that I'd rather give in to it than realise it didn't have to be that way. So surprised with my luck, I dropped what I had in the process. Flavia, I am so in love with you it burns. I hope we travel the world and do all the dumb stuff we said we would do. The pain I feel at the one-sided nature of certain feelings will never cease, but in comparison to not seeing you again it is so insignificant it doesn't bear mentioning. I can live with that pain. I've lived with much worse. Only at distance do I fully realise my love for all things about you is so much more than that pain.`,

  ];

  const loveLines = [
    "I love how funny you are.",
    "I love how you play along with my bits with no hesitation.",
    "I love your outlook on life.",
    "I love the way you sound in all three languages.",
    "I love the way you smile.",
    "I love the way you laugh.",
    "I love the way your face scrunches up as you concentrate.",
    "I love the way you look when faced with technology.",
    "I love the way you know more than me about films.",
    "I love the way you talk about football.",
    "I love the way you get passionate.",
    "I love the way you get angry.",
    "I love the way you get frustrated.",
    "I love the way you sneeze.",
    "I love the way you snore.",
    "I love the way you jolt in your sleep.",
    "I love the way you shoot every limb in every direction.",
    "I love the way other people love you.",
    "I love the way you look at me.",
    "I love the way you understand me.",
    "I love the way you make the world disappear around me.",
    "I love that when we talk, hours slip by, and for that brief time truly nothing else matters.",
  ];

  return (
    <div style={{
      maxWidth: '580px',
      margin: '0 auto',
      padding: '8rem 2rem 6rem',
    }}>
      {/* Date / quiet header */}
      <div style={{
        marginBottom: '3.5rem',
      }}>
        <p style={{
          fontSize: '0.72rem',
          color: 'var(--ink-faint)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontFamily: 'var(--font-body)',
          marginBottom: '1rem',
        }}>
          For Flavia
        </p>
        <div style={{
          width: '32px',
          height: '1px',
          background: 'var(--border)',
        }} />
      </div>

      {/* Body */}
      <div>
        {paragraphs.map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2.2vw, 1.08rem)',
              lineHeight: 1.95,
              color: 'var(--ink)',
              fontWeight: 400,
              marginBottom: '1.75rem',
              letterSpacing: '0.01em',
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Love lines */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.85rem',
        padding: '3rem 0',
        borderTop: '1px solid var(--border)',
        marginTop: '0.5rem',
      }}>
        {loveLines.map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              lineHeight: 1.5,
              color: 'var(--ink)',
              fontWeight: 400,
              textAlign: 'center',
              margin: 0,
              letterSpacing: '0.01em',
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Closing mark */}
      <div style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border)',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'var(--ink-light)',
          letterSpacing: '0.01em',
        }}>
          D
        </p>
      </div>
    </div>
  );
}