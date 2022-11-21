import { Container, Badge, List, ListItem, Box } from '@chakra-ui/react';

import { PostImage } from '../../components/post/PostImage';
import { PostMeta } from '../../components/post/PostMeta';
import { PostTitle } from '../../components/post/PostTitle';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Post = () => {
  return (
    <ArticleLayout title="crypto tracker">
      <Container>
        <PostTitle>
          How to do this <Badge>2022</Badge>
        </PostTitle>
        <List ml={4} my={4}>
          <ListItem>
            <PostMeta>Tag</PostMeta>
          </ListItem>
        </List>
        <Paragraph>
          in this post we will do this and that and then this after that
        </Paragraph>
        <PostImage src="/images/ava.jpg" />
      </Container>
      <Box p={5}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sagittis eu libero quis facilisis. Donec accumsan nisl at ipsum
          finibus, vitae maximus leo pellentesque. Suspendisse aliquam mi at
          arcu molestie, at placerat est commodo. Nullam vehicula posuere ipsum,
          a dapibus diam porta a. Donec eget pretium nisi. Pellentesque id
          mauris vel lorem sagittis lobortis non ut orci. Curabitur vitae est
          vel risus accumsan facilisis in vitae metus. Suspendisse sodales
          facilisis odio a placerat. Aliquam lobortis vulputate lorem, ac
          sodales nisl condimentum vel. Duis faucibus mi vel pellentesque
          fringilla. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aliquam rhoncus non lectus eu posuere. Morbi mattis diam
          eget nunc ornare, in varius turpis semper. Curabitur euismod massa ut
          tempor ultricies. Duis consequat lectus nec libero euismod, vel
          placerat nisi semper. Sed vel suscipit lorem. Duis tempus at purus at
          fermentum. Etiam pharetra dolor id mi malesuada interdum. Proin porta
          fermentum ex, vitae placerat elit interdum eget. Quisque congue
          vulputate euismod. Phasellus eros nisi, viverra at libero at, auctor
          lobortis felis. Aenean auctor iaculis nisi ac efficitur. Donec
          sodales, massa sed vulputate molestie, tellus quam suscipit tellus, et
          molestie nisi ligula et quam. Ut enim urna, aliquam sed consequat
          eget, pharetra non odio. Integer viverra ligula risus, non fringilla
          risus venenatis sit amet. Cras quis dictum risus, at interdum ante.
          Aenean eleifend mauris sed neque sollicitudin auctor sed vitae velit.
          Ut sollicitudin augue felis, sed elementum metus fringilla vitae.
          Fusce tincidunt sodales volutpat. Pellentesque in justo iaculis,
          ultricies metus ac, semper lectus. Nullam dictum libero a enim rhoncus
          blandit. Sed suscipit ut justo quis viverra. Sed metus diam, convallis
          non quam vel, accumsan vehicula nibh. Nunc vel felis sed elit lacinia
          hendrerit. Nullam erat neque, vulputate eget dui vel, laoreet pulvinar
          magna. Vestibulum feugiat metus sed mi tempor, in condimentum metus
          ultricies. Suspendisse non velit ante. Donec non tristique tortor.
          Morbi sit amet sem faucibus risus vulputate accumsan id dictum libero.
          Morbi at libero nec sem accumsan congue. In aliquet elit eget leo
          aliquam feugiat. Cras varius in nisi et auctor. Vestibulum sit amet
          nulla nunc. Praesent in ligula nec justo finibus scelerisque eget sed
          lorem. Mauris erat turpis, ultricies a mauris ac, cursus finibus
          nulla. Integer tempor, massa scelerisque laoreet gravida, lorem ex
          ultrices ligula, in suscipit leo est ac metus. Sed at feugiat libero.
          Nam egestas justo sit amet felis tempor convallis. Cras non volutpat
          erat, a cursus eros. Aliquam convallis tincidunt ex, tincidunt pretium
          ante elementum porttitor. Etiam nec dui id enim ultricies varius in
          eget justo. Proin eleifend viverra leo euismod fringilla. In vulputate
          odio ut purus finibus varius. Vivamus blandit risus neque, vitae
          consequat sapien ultricies facilisis. Maecenas porta lorem ligula,
          vitae bibendum lorem bibendum et. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat
          volutpat. Duis congue aliquet ante vitae molestie. Aenean congue
          bibendum odio, quis cursus purus imperdiet nec. Morbi vitae risus
          velit. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Curabitur mollis tempor lectus at
          rutrum. Cras finibus erat ac odio interdum placerat. Cras pulvinar
          pellentesque magna, eu facilisis sapien. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Integer elementum erat eget augue
          rutrum vestibulum. Ut pellentesque ut risus sed tristique. Fusce nec
          augue eget nunc ultricies blandit nec quis felis. Vestibulum non
          tincidunt nunc. Ut sit amet nunc interdum dui auctor gravida eu quis
          purus. Curabitur a hendrerit diam. Pellentesque finibus porta ipsum.
          Pellentesque a lobortis ligula, in laoreet nibh. Vestibulum sodales
          arcu mauris, quis rhoncus diam bibendum ac. Phasellus venenatis mauris
          ut massa pulvinar, varius sollicitudin risus tincidunt. Integer a nunc
          justo. Ut auctor ornare ante, et tincidunt dolor egestas in.
          Vestibulum ullamcorper lacus condimentum lorem faucibus molestie. Ut
          quis leo massa. Aliquam et justo sem. Phasellus nec sodales nisl. Duis
          cursus gravida sagittis. Donec cursus nec leo nec tincidunt. In
          fermentum egestas purus at hendrerit. Aenean a varius odio, ac congue
          mi. Curabitur in nisl quis erat ornare gravida non ut augue. Morbi et
          bibendum justo. Praesent id ornare nulla. Nulla augue nisi, ultrices
          sit amet metus hendrerit, molestie lacinia massa. Etiam mollis lacinia
          hendrerit. Suspendisse posuere ex quis malesuada convallis. Sed id
          magna diam. Sed quam leo, tristique non feugiat ac, viverra et nisl.
          In dictum condimentum elit vitae laoreet. Pellentesque ut arcu id ex
          auctor suscipit. Vivamus rhoncus eros et eros accumsan, a laoreet enim
          hendrerit. Proin neque tortor, imperdiet porttitor finibus eget,
          finibus a tortor. Pellentesque pretium risus a nisi feugiat volutpat.
          Vivamus a est purus. Donec a purus leo. Maecenas cursus sodales
          tellus, vitae tincidunt lectus iaculis non. Integer quis luctus enim.
          Nam ut sapien tincidunt, cursus tellus vel, dignissim tortor. Sed
          luctus orci vitae pellentesque lacinia. Mauris eget gravida velit, id
          faucibus nulla. Cras placerat eros urna, eget vulputate odio
          ullamcorper nec. Etiam efficitur, nisi eu accumsan consequat, arcu
          metus dignissim eros, eget iaculis justo turpis ut velit. Nulla ut
          massa velit. Integer dictum sit amet felis ut auctor. Praesent mauris
          dolor, scelerisque eu enim in, vestibulum mollis enim. Mauris
          condimentum vestibulum viverra. Morbi placerat vestibulum ligula, et
          viverra metus mollis eu. Morbi quis ex nulla. Fusce accumsan blandit
          velit vel faucibus. Nam vel urna non elit consequat consequat sed eu
          lectus. Quisque a porta erat. Fusce luctus lorem sed enim ultrices,
          vel ornare tellus mattis. Aenean rutrum enim mattis nisl rhoncus
          aliquet. Curabitur nec libero ex. Duis est est, accumsan eget nibh
          nec, efficitur blandit velit. Cras quis ante est. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Quisque feugiat orci eget sagittis iaculis. Praesent
          rhoncus sapien eu nisl tincidunt mattis. Nam quam ex, euismod in nisi
          eu, venenatis facilisis mi. Mauris eu neque eget velit maximus
          pretium. Aenean pulvinar diam et molestie fringilla. Ut ligula purus,
          euismod et orci quis, hendrerit interdum urna. Morbi venenatis, lacus
          sed iaculis condimentum, lorem metus faucibus risus, sed dignissim
          massa nisi id nisi. Vivamus elementum erat nec odio lacinia blandit.
          Sed hendrerit, ligula nec molestie bibendum, dolor purus facilisis
          velit, sed tincidunt neque quam ut nunc. Sed id scelerisque nunc.
          Donec dignissim interdum tortor, vitae ullamcorper dui dictum sed.
          Vivamus ut tellus in dui egestas luctus. Donec ultrices consectetur
          dolor, pretium sollicitudin nunc efficitur nec. Maecenas mollis libero
          id iaculis pulvinar. Aliquam erat volutpat. Maecenas laoreet nisl
          vitae ligula facilisis, auctor varius urna congue. Aenean egestas
          ligula neque, nec finibus risus aliquam a.
        </Paragraph>
      </Box>
    </ArticleLayout>
  );
};

export default Post;
