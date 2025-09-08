import {
  Container,
  Group,
  Text,
  Button,
  Anchor,
  Transition,
} from "@mantine/core";
import { IconClock, IconPhone } from "@tabler/icons-react";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--mantine-color-gray-3)",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container
        size="lg"
        py="sm"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Group gap="xs">
          <IconClock size={28} color="var(--mantine-color-blue-6)" />
          <Text
            fw={700}
            size="xl"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            AutoCare Pro
          </Text>
        </Group>

        <Group gap="xl" visibleFrom="md">
          <Anchor
            href="#services"
            size="sm"
            c="dimmed"
            fw={500}
            underline="hover"
          >
            Layanan
          </Anchor>
          <Anchor href="#about" size="sm" c="dimmed" fw={500} underline="hover">
            Tentang
          </Anchor>
          <Anchor
            href="#testimonials"
            size="sm"
            c="dimmed"
            fw={500}
            underline="hover"
          >
            Testimoni
          </Anchor>
          <Anchor
            href="#contact"
            size="sm"
            c="dimmed"
            fw={500}
            underline="hover"
          >
            Kontak
          </Anchor>
        </Group>

        <Transition transition="scale" duration={200} mounted>
          {(styles) => (
            <Button
              leftSection={<IconPhone size={16} />}
              style={styles}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              radius="xl"
              size="sm"
            >
              Hubungi Sekarang
            </Button>
          )}
        </Transition>
      </Container>
    </header>
  );
}
