import {
  Container,
  SimpleGrid,
  Group,
  Text,
  Stack,
  ActionIcon,
} from "@mantine/core";
import {
  IconClock,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "80px 16px",
        borderTop: "1px solid var(--mantine-color-gray-3)",
        background: "var(--mantine-color-gray-9)",
      }}
    >
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl" mb="xl">
          <div>
            <Group mb="sm">
              <IconClock size={22} color="var(--mantine-color-blue-6)" />
              <Text fw={800} fz="lg">
                AutoCare Pro
              </Text>
            </Group>
            <Text c="dimmed" size="sm">
              Mitra terpercaya Anda untuk layanan otomotif sejak 1995.
            </Text>
          </div>

          <div>
            <Text fw={700} mb="sm">
              Layanan
            </Text>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">
                Ganti Oli & Perawatan
              </Text>
              <Text size="sm" c="dimmed">
                Perbaikan & Servis Rem
              </Text>
              <Text size="sm" c="dimmed">
                Diagnostik Mesin
              </Text>
              <Text size="sm" c="dimmed">
                Servis Transmisi
              </Text>
            </Stack>
          </div>

          <div>
            <Text fw={700} mb="sm">
              Tautan Cepat
            </Text>
            <Stack gap={4}>
              <Text size="sm">
                <a
                  href="#about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Tentang Kami
                </a>
              </Text>
              <Text size="sm">
                <a
                  href="#services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Layanan
                </a>
              </Text>
              <Text size="sm">
                <a
                  href="#testimonials"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Testimoni
                </a>
              </Text>
              <Text size="sm">
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Kontak
                </a>
              </Text>
            </Stack>
          </div>

          <div>
            <Text fw={700} mb="sm">
              Info Kontak
            </Text>
            <Stack gap={4} mb="md">
              <Text size="sm" c="dimmed">
                (555) 123-4567
              </Text>
              <Text size="sm" c="dimmed">
                Jl. Utama No. 123, Jakarta
              </Text>
              <Text size="sm" c="dimmed">
                info@autocarepro.com
              </Text>
            </Stack>
            <Group gap="sm">
              <ActionIcon variant="subtle" color="blue" size="lg" radius="xl">
                <IconBrandFacebook size={18} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="blue" size="lg" radius="xl">
                <IconBrandInstagram size={18} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="blue" size="lg" radius="xl">
                <IconBrandTwitter size={18} />
              </ActionIcon>
            </Group>
          </div>
        </SimpleGrid>

        <Text ta="center" c="dimmed" size="sm">
          © 2024 AutoCare Pro. Semua hak dilindungi.
        </Text>
      </Container>
    </footer>
  );
}
